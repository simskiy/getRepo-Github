import './styles/main.scss'
import '@js/InputComponent'
import {GetRepo} from './js/GetRepo'

const el = document.querySelector('#gg-app')
const gg = new GetRepo(el)
gg.render()
