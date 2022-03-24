import Image from 'next/image'
import { cloudflareLoader } from './util'


export default function CloudflareImage(props) {
    return <Image loader={cloudflareLoader} {...props} />
}