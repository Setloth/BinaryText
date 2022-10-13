export async function loader({ params }) {
  return { text: params.text, base: params.base }
}