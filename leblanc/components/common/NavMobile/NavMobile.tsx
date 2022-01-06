import React, { useState, useEffect } from 'react'
import s from './NavMobile.module.css'
import NextLink from 'next/link'
import cn from 'classnames'
import { useUI } from '@components/ui/context'
import { homeNavigation, NavItem } from '@leblanc/data/navigation'
import { VscClose } from 'react-icons/vsc'
import { GoChevronRight } from 'react-icons/go'
import { VscChevronRight } from 'react-icons/vsc'

const NavMobile = () => {
  const { closeMobileSidebarIfPresent } = useUI()
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)
  const [activeChildItem, setActiveChildItem] = useState<NavItem | null>(null)

  const handleLinkClick = () => {
    closeMobileSidebarIfPresent()
  }

  return (
    <nav className={s.nav}>
      {!activeItem && !activeChildItem && (
        <ul className={s.menu}>
          {homeNavigation.map((item: NavItem) => (
            <li key={item.id}>
              {item.childs ? (
                <button className={s.navItem} onClick={() => setActiveItem(item)}>
                  <span>{item.label}</span>
                  {item.childs && (
                    <VscChevronRight size={11} className={s.navItemChevron} />
                  )}
                </button>
              ) : (
                item.href && (
                  <NextLink href={item.href || ''}>
                    <a className={s.navItem} onClick={handleLinkClick}>
                      {item.label}
                    </a>
                  </NextLink>
                )
              )}
            </li>
          ))}
        </ul>
      )}

      {/* CHILDS (1st level) */}
      {activeItem?.childs && !activeChildItem && (
        <div className={s.childPanel}>
          <ul className={s.menu}>
            <li className={cn(s.navItem, s.childHeader)}>
              <button onClick={() => setActiveItem(null)}>
                <VscClose size={14} />
              </button>
              <span>{activeItem.label}</span>
            </li>
            {activeItem.childs.map((item: NavItem) => (
              <li key={item.id}>
                {item.childs ? (
                  <button
                    className={s.navItem}
                    onClick={() => setActiveChildItem(item)}>
                    <span>{item.label}</span>
                    {item.childs && (
                      <VscChevronRight size={11} className={s.navItemChevron} />
                    )}
                  </button>
                ) : (
                  item.href && (
                    <NextLink href={item.href || ''}>
                      <a className={s.navItem} onClick={handleLinkClick}>
                        {item.label}
                      </a>
                    </NextLink>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* GRANDCHILDS (2nd level) */}
      {activeChildItem?.childs && (
        <div className={s.childPanel}>
          <ul className={s.menu}>
            <li className={cn(s.navItem, s.childHeader)}>
              <button onClick={() => setActiveChildItem(null)}>
                <VscClose size={14} />
              </button>
              <span>{activeChildItem.label}</span>
            </li>
            {activeChildItem.childs.map((item: NavItem) => (
              <li key={item.id}>
                {item.href && (
                  <NextLink href={item.href || ''}>
                    <a className={s.navItem} onClick={handleLinkClick}>
                      {item.label}
                    </a>
                  </NextLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavMobile