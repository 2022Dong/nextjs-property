'use client'; // Client side.
import { useRouter, useParams, useSearchParams, usePathname} from 'next/navigation';

const PropertyPage = () => {
    const router = useRouter();
    // return (
    //     <div>
    //         <button onClick={() => router.replace('/')}>
    //             Go Home
    //         </button>
    //     </div>
    //  );
    
    const params = useParams();
    // return (
    //     <div>Property Page {params.id}</div>  //[slug] --- {params.slug}
    // );

    const searchParams = useSearchParams();
    // return <div>Property Page {searchParams.get('name') }</div> // http://localhost:3000/properties/1?name=Aya

    const pathname = usePathname();
    // return <div>Property Page {pathname}</div>
}
 
export default PropertyPage;