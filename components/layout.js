import CategoryNavigation from "./category_navigation";

const Layout = ({ children, categories, seo }) => (
  <>
    <CategoryNavigation categories={categories} />
    {children}
  </>
);

export default Layout;