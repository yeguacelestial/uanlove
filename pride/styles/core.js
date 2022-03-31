import { StyleSheet, Platform } from "react-native";

const MainColours = {
  defaultBackgroundColor: "#f9f9f9",
  textInputIconColor: "red",
  white: "#fff",
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
	},

  panelButton: {
		padding: 13,
		borderRadius: 10,
		backgroundColor: '#FF6347',
		alignItems: 'center',
		marginVertical: 7
	},
  panelButtonTitle: {
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white'
	},
  action: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},

  textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -5,
		paddingLeft: 10,
	},

  textInputIcon: {
    marginRight: 10,
    opacity: 0.5
  },

  iconSize: 22,
});

export {
  MainColours,
  MainStyles,
}