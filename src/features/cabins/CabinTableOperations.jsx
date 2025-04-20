import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  const discountOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No Discount" },
    { value: "with-discount", label: "With Discount" },
  ];

  const sortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z - A)" },
    { value: "regularPrice-asc", label: "Sort by Price (Low first)" },
    { value: "regularPrice-desc", label: "Sort by Price (High first)" },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={discountOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
