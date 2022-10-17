import React from 'react'
import SearchInput from '../../components/Input/SearchInput'
import Tabs from '../../components/Tabs'

function Library() {
  return (
    <div className='library-body'>
        <SearchInput />
        <Tabs />
    </div>
  )
}

export default Library