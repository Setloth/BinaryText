import './App.css'
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Chip, Tooltip, Container, Snackbar } from "@mui/material"

export default function Convert() {
  const { text, base } = useLoaderData()
  const [convert, setConvert] = useState([])

  useEffect(() => {
    var tmp = []
    console.log(text, base, convert)
    for (var n in text) {
      tmp.push(text.charCodeAt(n).toString(base))
      setConvert(tmp)
    }
  }, [text, base])

  const copy = () => {
    navigator.clipboard.writeText(convert.join(" "))
    setOpen(true)
  }

  const [open, setOpen] = useState(false)

  const handleClose = (e, r) => {
    if (r == "clickaway") return
    setOpen(false)
  }

  return (

    <>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={6000} message="Result Copied" />
      <Tooltip title="Copy Result">
        <Chip label={convert.join(" ")} onClick={copy} />
      </Tooltip>
    </>


  )
}
