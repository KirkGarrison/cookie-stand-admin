export default function FormLocation(props) {
    return (
      <div className='flex py-2 px-3 font-semibold'>
        <label className='pr-1 text-xs my-auto'>{props.label}</label>
        <input name={props.name} className=' flex-auto text-sm' type="text" />
      </div>
    )
  }