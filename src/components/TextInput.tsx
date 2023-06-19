import React, { useState } from 'react'
import Alert from './Alert';

export default function TextInput({ heading }: { heading: string }) {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false)
  const [alert, setAlert] = useState({})

  const showAlert = (message: string, type: string) => {
    setAlert({
      message: message,
      type: type,
    })
    setModal(true)
  }

  const updateText = () => {
    console.log('click');
    const newText = text.toUpperCase();
    setText(newText)
    showAlert('success update text', 'success')
  }

  const handleChange = (e: any) => {
    console.log('handleChange');
    setText(e.target.value)
    showAlert('success handle Change text', 'success')
  }

  const clearText = () => {
    console.log('clear');
    setText(' ');
    showAlert('success clear Text', 'success')
  }

  const spaceRemove = () => {
    const focusText = text.split(/[ ]+/);
    setText(focusText.join(' '));
    showAlert('success spaceRemove Text', 'success')
  }

  return (
    <div>
      {modal && <Alert alert={alert} />}
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
