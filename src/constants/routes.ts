import {ReactComponent as ProductsIcon} from './../static/svg/3d-square.svg'
import {ReactComponent as PromoteIcon} from './../static/svg/discount-shape.svg'
import {ReactComponent as DashboardIcon} from './../static/svg/key-square.svg'
import {ReactComponent as HelpIcon} from './../static/svg/message-question.svg'
import {ReactComponent as CustomersIcon} from './../static/svg/user-square.svg'
import {ReactComponent as IncomeIcon} from './../static/svg/wallet-money.svg'

enum Routes {
	dashboard = '/dashboard',
	products = '/products',
	customers = '/customers',
	income = '/income',
	promote = '/promote',
	help = '/help'
}

const sidebarRoutes = [
	{
		id: 1,
		label: 'Dashboard',
		url: Routes.dashboard,
		icon: DashboardIcon
	},
	{
		id: 2,
		label: 'Products',
		url: Routes.products,
		icon: ProductsIcon
	},
	{
		id: 3,
		label: 'Customers',
		url: Routes.customers,
		icon: CustomersIcon
	},
	{
		id: 4,
		label: 'Income',
		url: Routes.income,
		icon: IncomeIcon
	},
	{
		id: 5,
		label: 'Promote',
		url: Routes.promote,
		icon: PromoteIcon
	},
	{
		id: 6,
		label: 'Help',
		url: Routes.help,
		icon: HelpIcon
	}
];

export { Routes, sidebarRoutes };
