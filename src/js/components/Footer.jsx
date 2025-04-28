import React from 'react'
import { HiCommandLine } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="py-4 bg-gray-50 dark:bg-primary/80">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <HiCommandLine />
              BullCLI
            </Link>
          </div>
          <div className="text-gray-text dark:text-gray-light text-sm">
            © 2025 Diego Toro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer