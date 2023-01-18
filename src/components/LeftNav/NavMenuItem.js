import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

const NavMenuItem = ({ idx, item, isActive }) => {
  return (
    <li key={idx} className={isActive ? 'is-active' : null}>
      <Link
        href={item.page}
        isExternal={false}
        text={<span>{item.name}</span>}
      />
    </li>
  )
}

NavMenuItem.propTypes = {
  idx: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  isActive: PropTypes.string.isRequired,
}

export default NavMenuItem
