import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '58u1fu6y', // your Sanity project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// 🔽 Add this named export
export function urlFor(source) {
  return builder.image(source);
}
