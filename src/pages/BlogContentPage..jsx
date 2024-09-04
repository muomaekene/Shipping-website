import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const BlogContentPage = () => {
  const { id } = useParams();
  return (
    <Layout>
      Read story <i>{id}</i>
    </Layout>
  );
};

export default BlogContentPage;
