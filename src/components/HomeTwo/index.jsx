import { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";
import CategoriesSection from "./CategoriesSection";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";
import SectionStyleTwo from "../Helpers/SectionStyleTwoHomeTwo";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import ProductsAds from "../Home/ProductsAds";
import { productByTagApi } from "../../api/products/product";

export default function HomeTwo() {
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [newAdded, setNewAdded] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [featuredRes, popularRes, topSellingRes, newRes] = await Promise.all([
          productByTagApi("featured"),
          productByTagApi("popular"),
          productByTagApi("topSelling"),
          productByTagApi("newAdded"),
        ]);
        
        // console.log("Featured:", featuredRes);
        // console.log("Popular:", popularRes);
        // console.log("Top Selling:", topSellingRes);
        // console.log("New Added:", newRes);

        setFeatured(featuredRes);
        setPopular(popularRes);
        setTopSelling(topSellingRes);
        setNewAdded(newRes);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <Banner className="banner-wrapper mb-[46px]" />

      {/* Featured Products */}
      <SectionStyleThreeHomeTwo
      className="new-products mb-[60px]"
      sectionTitle="Featured Products"
        products={featured}
        showProducts={6}
        seeMoreUrl="/all-products"
      />

      {/* Campaign */}
      {/* <CampaignCountDown
        className="mb-[60px]"
        lastDate="2025-10-04 4:00:00"
      /> */}

      {/* Ads */}
      {/* <ProductsAds
        ads={[
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/bannera-2.2.png`,
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/bannera-2.1.png`,
        ]}
        sectionHeight="sm:h-[290px] h-full"
        className="products-ads-section mb-[60px]"
      /> */}

      {/* Popular Sales */}
      <SectionStyleThreeHomeTwo
        products={popular}
        showProducts={3}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="feature-products mb-[60px]"
      />

      {/* Top Selling */}
      <ViewMoreTitle
        className="top-selling-product mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Top Selling Products"
      >
        <SectionStyleTwo products={topSelling} />
      </ViewMoreTitle>

      {/* Ad */}
      {/* <ProductsAds
        ads={[
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/bannera-2.3.png`,
        ]}
        className="products-ads-section mb-[60px]"
      /> */}

      {/* New Arrivals */}
      <SectionStyleThreeHomeTwo
        products={newAdded}
        showProducts={3}
        sectionTitle="New Arrivals"
        seeMoreUrl="/all-products"
        className="new-arrivals mb-[60px]"
      />

      {/* Ad */}
      {/* <ProductsAds
        sectionHeight="164"
        ads={[
          `${import.meta.env.VITE_PUBLIC_URL}/assets/images/bannera-2.4.png`,
        ]}
        className="products-ads-section mb-[60px]"
      /> */}

      {/* More Popular */}
      <SectionStyleFour
        products={popular} 
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="category-products mb-[60px]"
      />
    </Layout>
  );
}
