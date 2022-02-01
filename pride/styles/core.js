import { StyleSheet, Platform } from "react-native";

const MainColours = {
  white: "#ffffff",
}

const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contain: {
    resizeMode: 'contain',
  },

  row: {
    flexDirection: "row",
  },

  bgWhite: {
    backgroundColor: MainColours.white,
  },

  fx1: {
    flex: 1,
  },
  fx2: {
    flex: 2,
  },
  fx3: {
    flex: 3,
  },

  alignCenter: {
    alignItems: "center",
  },

  justifyCenter: {
    justifyContent: "center",
  },

  h64: {
    height: 64,
  },

  title: {
    fontWeight: Platform.OS == 'ios' ? '800' : '700',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },

  description: {
    fontWeight: Platform.OS == 'ios' ? '800' : '700',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },

  shadow: {
		shadowColor: '#7F5DF0',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},

  menuItemText: {
		color: '#777777',
		marginLeft: 20,
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 26
	}
}); 

export {
  MainColours,
  MainStyles,
}