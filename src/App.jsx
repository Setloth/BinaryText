import './App.css'
import { useState, useEffect } from "react"
import { Outlet, useNavigate, useLoaderData, Link } from "react-router-dom"

import { Stack, Container, TextField, Select, MenuItem, Unstable_Grid2 as Grid } from "@mui/material"

export default function App() {
  const navigate = useNavigate()
  const text = useLoaderData()

  const [input, setInput] = useState()
  const [base, setBase] = useState(2)

  const handleBase = (e) => {
    setBase(e.target.value)
  }

  const handleText = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    console.log(input, base)
    if (input && base) navigate("/" + base + "/" + input)
    else navigate("/")
  }, [input, base])

  var ls = []
  for (var i = 2; i <= 36; i++) ls.push(i)
  console.log(ls, ls.map(v => <option key={i} value={i}>Base {i}</option>))
  return (
    <Container>

      <TextField onChange={handleText} />
      <Select label="base" value={base} onChange={handleBase}>
        {
          ls.map(b => <MenuItem key={b} value={b}>{b}</MenuItem>)
        }
      </Select>
      <Stack>
        <Outlet />

      </Stack>

    </Container>
  )
}
