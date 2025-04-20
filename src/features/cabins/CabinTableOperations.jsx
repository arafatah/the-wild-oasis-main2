import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  const discountOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No Discount" },
    { value: "with-discount", label: "With Discount" },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={discountOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
