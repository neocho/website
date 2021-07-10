import Header from '@includes/Header';
import Footer from '@includes/Footer'; 
import { getPosts, getPostSlug } from '@api';

export default function Post(props) {
    return (
        <div className="place-items-center min-h-screen">
            <div className="ml-2">

                <Header title={props.title}/>
            
                <div className="font-body text-md mt-5 break-words pl-5 pr-10 mb-10">
                    <h1 className="font-body text-xs mt-6">{props.date}</h1>
                    <h1 className="font-bold text-md mb-4">{props.title}</h1>

                    <div dangerouslySetInnerHTML={{__html: props.content}} className="space-y-4 font-body text-sm w-96 pr-8"></div> 
                </div>

                <Footer />
            </div>
        </div>
    );
}




export async function getStaticProps(context) {
    var slug = await getPostSlug(context.params.slug);

    return {
        props: slug 
    }
}

export async function getStaticPaths() {
    var paths = await getPosts();

    paths = paths.map(post => ({
        params: {slug: post.slug}
    }));

    return {
        paths: paths, 
        fallback: false
    }
}
