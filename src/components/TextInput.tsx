import React, { useState } from 'react'

export default function TextInput({ heading }: { heading: string }) {
  const [text, setText] = useState('');

  const updateText = () => {
    console.log('click');
    const newText = text.toUpperCase();
    setText(newText)
  }

  const handleChange = (e: any) => {
    console.log('handleChange');
    setText(e.target.value)
  }

  const clearText = () => {
    console.log('clear');
    setText(' ');
  }

  const spaceRemove = () => {
    const focusText = text.split(/[ ]+/);
    setText(focusText.join(' '));
  }

  return (
    <div>
      <h1>{heading}</h1>
      <div className="flex justify-center gap-4 items-start  w-1/2">
        <label className="w-1/4">Example textarea</label>
        <textarea className="border border-slate-700 w-3/4 p-2 min-h-16 rounded-md" value={text} onChange={handleChange} id="box"></textarea>
      </div>
      <button className="border border-blue-600 bg-blue-400 rounded-md px-3 py-2 mt-5" type="submit" onClick={updateText}>convert to uppercase</button>
      <button className="ml-5 border border-blue-600 bg-blue-400 rounded-md px-3 py-2 mt-5" type="submit" onClick={clearText}>Clear text</button>
      <button className="ml-5 border border-blue-600 bg-blue-400 rounded-md px-3 py-2 mt-5" type="submit" onClick={spaceRemove}>Handle extra spaces</button>
      <h3 className='py-5 font-bold'>Preview</h3>
      <p className='mt-2'>{text}</p>
      <p className='mt-2'>{text.length} letter</p>
      <p className='mt-2'>{text.split(" ").length} words</p>
    </div>
  )
}
