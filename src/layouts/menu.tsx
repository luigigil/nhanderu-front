import {
  ExpandLess,
  ExpandMore,
  HealthAndSafety,
  LocalOffer,
  MedicalInformation,
  Work,
} from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
// import { useRouter } from 'next/router'
import { useState } from 'react'

const MenuExample = () => {
  // const router = useRouter()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MedicalInformation />
        </ListItemIcon>
        <ListItemText primary='Parent Item' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <HealthAndSafety />
            </ListItemIcon>
            <ListItemText primary='Child Item 1' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocalOffer />
            </ListItemIcon>
            <ListItemText primary='Child Item 2' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary=' Child Item 3' />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}

export default MenuExample
