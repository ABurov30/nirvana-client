import { useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { checkUserThunk } from "../redux/slices/users/thunkActions"


export function useCheckUser () {
const dispatch = useAppDispatch()
useLayoutEffect(() => {
	dispatch(checkUserThunk())
}, [])

const user = useAppSelector(state => state.user)
return user
}