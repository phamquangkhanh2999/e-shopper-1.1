import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import category from "../static/category";
import colors from "../static/product-color";
import size from "../static/product-size";

import Button from "../components/Button";
import Helmet from "../components/Helmet";
import InfinityList from "../components/InfinityList";
import Pagination from "../components/Pagination";
import CheckBox from "../components/CheckBox";

import { ProductContext } from "../context/productContext/ProductContext";
const Catalog = () => {
  const { products } = useContext(ProductContext);

  // Get curren posts

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPrePage] = useState(15);

  const indexOfLastPost = currentPage * postsPrePage;
  const indexOfFirsPost = indexOfLastPost - postsPrePage;
  const currentPosts = products.slice(indexOfFirsPost, indexOfLastPost);

  // pagination
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  const [productList, setProductList] = useState(currentPosts);

  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  // loc
  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = products;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProductList(temp);
  }, [filter, products]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  const clearFilter = () => setFilter(initFilter);

  const filterRef = useRef(null);
  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title='Sản Phẩm'>
      <div className='catalog'>
        <div className='catalog__filter' ref={filterRef}>
          <div
            className='catalog__filter__close'
            onClick={() => showHideFilter()}
          >
            <AiOutlineArrowLeft />
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__title'>
              danh mục sản phẩm
            </div>
            <div className='catalog__filter__widget__content'>
              {category.map((item, index) => (
                <div
                  key={index}
                  className='catalog__filter__widget__content__item'
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__title'>màu sắc</div>
            <div className='catalog__filter__widget__content'>
              {colors.map((item, index) => (
                <div
                  key={index}
                  className='catalog__filter__widget__content__item'
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__title'>kích cỡ</div>
            <div className='catalog__filter__widget__content'>
              {size.map((item, index) => (
                <div
                  key={index}
                  className='catalog__filter__widget__content__item'
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__content'>
              <Button size='sm' onClick={clearFilter}>
                xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className='catalog__filter__toggle'>
          <Button size='sm' onClick={() => showHideFilter()}>
            bộ lọc
          </Button>
        </div>

        <div className='catalog__content'>
          <InfinityList data={productList} />
          <Pagination
            postsPrePage={postsPrePage}
            totalPosts={products.length}
            pagination={pagination}
          />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
