import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getBottomSpace(),
  },
  message: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  outline: {
    width: '40%',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems:'center',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getBottomSpace(),
    flexDirection: 'row',
    marginTop: 20,
  }
})