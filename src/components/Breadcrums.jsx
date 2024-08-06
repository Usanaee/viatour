import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Breadcrums({ items }) {
  const [breadcrums, setBreadcrums] = useState([]);
  useEffect(() => {
    const breadcrumbsData = items.map((item, index) => ({
      path: item.path,
      label: index === 0 ? item.label : `/ ${item.label}`,
    }));
    setBreadcrums(breadcrumbsData);
  }, [items]);

  return (
    <div>
      <ul className="flex gap-1">
        {breadcrums.map((breadcrum, index) => (
          <li key={breadcrum.label}>
            {index === breadcrum.length - 1 ? (
              <span>{breadcrum.label}</span>
            ) : (
              <Link
                to={breadcrum.path}
                className="hover:text-[#EA580C] duration-200"
              >
                {" "}
                {breadcrum.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrums;
