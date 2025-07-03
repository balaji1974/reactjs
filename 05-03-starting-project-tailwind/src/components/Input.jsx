
function Input({label, invalid, ...props}) {
    let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let textClass = 'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow';

    if(invalid) {
      labelClass += ' text-red-400';  
      textClass +=' bg-stone-400';
    }
    else {
      labelClass += ' text-stone-300';
      textClass +=' bg-stone-300';
    }

    return <p>
      <label className={labelClass}>{label}</label>
      <input className={textClass} {...props} />
    </p>
}

export default Input;