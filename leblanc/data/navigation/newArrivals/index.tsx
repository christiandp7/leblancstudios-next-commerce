import type { NavItem } from '@leblanc/data/navigation'
import womens from './na_womens'
import mens from './na_mens'
import aNecessaryRisk from './na_aNecessaryRisk'
import ss21 from './na_ss21'
import whiteNakedDuck from './na_whiteNakedDuck'

const newArrivals: NavItem[] = [
  {
    id: 'women-iojewi33',
    label: 'Womens',
    childs: womens,
  },
  {
    id: 'men-43789hd',
    label: 'Mens',
    childs: mens,
  },
  {
    id: 'all-d78ga',
    label: 'All',
    href: '#',
  },
  {
    id: 'A-Necessary-Risk-x-Gus-Pena-da89',
    label: (
      <>
        A Necessary Risk <b>x Gus Peña</b>
      </>
    ),
    abbr: 'ANR',
    childs: aNecessaryRisk,
  },
  {
    id: 'ss21-timeless-duck-shirt-intimo-y-personal-ad78tf',
    label: (
      <>
        'SS21 '<b>[Timeless Duck Shirt: Intimo y Personal]</b>
      </>
    ),
    abbr: 'SS21',
    childs: ss21,
  },
  {
    id: 'white-nacked-duck-da78t',
    label: 'White Naked Duck',
    abbr: 'WND',
    childs: whiteNakedDuck,
  },
]

export default newArrivals
