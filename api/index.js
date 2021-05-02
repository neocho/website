import matter from 'gray-matter';
import marked from 'marked'; 

export async function getPosts() {
	const context = require.context('../_posts', false, /\.md$/); 	
	const contextKeys = context.keys();

	const posts = []; 
	
	for (const key of contextKeys){
		console.log(key); 
		const post = key.slice(2); 
		const content = await import(`../_posts/${post}`); 
		
		const meta = matter(content.default); 

		const slug = post.replace('.md', ''); 
		const title = meta.data.title;  
		const date = meta.data.date; 

		posts.push({
			slug: slug, 
			title: title,
			date: date
		});
	}

	return posts;
}

export async function getPostSlug(slug) {
	const fileContent = await import(`../_posts/${slug}.md`); 
	const meta = matter(fileContent.default); 

	const content = marked(meta.content); 

	return {
		title: meta.data.title, 
		date: meta.data.date,
		content: content
	}
}

