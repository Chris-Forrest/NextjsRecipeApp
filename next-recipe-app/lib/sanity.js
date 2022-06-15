import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from "next-sanity";

const config ={
    projectId: "bw2eqv41",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
};

export const sanityClient = createClient(config)

export const usePreviewSubscriptionHook = createPreviewSubscriptionHook(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
})
