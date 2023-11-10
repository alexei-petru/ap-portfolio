import dynamic from "next/dynamic";

const DynamicForm = dynamic(
  () => import("src/components/Footer/Form/FormReal/FormReal"),
  {
    loading: () => <p>Loading form...</p>,
    ssr: true,
  },
);

const Form = () => {
  return <DynamicForm />;
};

export default Form;
