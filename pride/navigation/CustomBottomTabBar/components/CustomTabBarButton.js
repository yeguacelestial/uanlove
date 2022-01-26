import { TouchableOpacity, View } from "react-native"
import { MainStyles } from "../../../styles/core"

const CustomTabBarButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={{
			top: -30,
			justifyContent: 'center',
			alignItems: 'center',
			...MainStyles.shadow,
		}}
		onPress={onPress}
	>
		<View
			style={{
				width: 70,
				height: 70,
				borderRadius: 35,
				backgroundColor: '#e32f45'
			}}
		>
			{children}
		</View>
	</TouchableOpacity>
)

export default CustomTabBarButton