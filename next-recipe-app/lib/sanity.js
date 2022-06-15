import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config ={
    projectId: "bw2eqv41",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
};

export const sanityClient = createClient(config)

export const usePreviewSubscriptionHook = createPreviewSubscriptionHook(config)

// doesn't work export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const builder = imageUrlBuilder(config) 
export const urlFor = (source) => builder.image(source)
/*
export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});
*/
