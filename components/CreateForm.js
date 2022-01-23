import FormLabel from "./FormLabel";
import FormLocation from "./Form";

export default function CreateForm(props) {
  return (
    <form onSubmit={props.handleForm}>
      <FormLocation label="Location" name="location" />
      <div className='flex p-3 text-center'>
        <FormLabel label="Minimum Customers per Hour" name="minCust" />
        <FormLabel label="Maximum Customers per Hour" name="maxCust" />
        <FormLabel label="Average Cookies per Sale" name="avgCust" />
        <button className='bg-emerald-500 text-center py-3 w-64 rounded-sm'>Create</button>
      </div>
    </form>
  )
}