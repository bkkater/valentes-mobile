import { create } from 'tailwind-rn'
import styles from '../../styles.json'

const { tailwind, getColor } = create({
  ...styles,
  'bg-primary-100': {
    backgroundColor: '#FEFDFC',
  },
  'bg-primary-200': {
    backgroundColor: '#FCFBF7',
  },
  'bg-primary-300': {
    backgroundColor: '#FAF8F3',
  },
  'bg-primary-400': {
    backgroundColor: '#F7F2E9',
  },
  'bg-primary-500': {
    backgroundColor: '#F3EDE0',
  },
  'bg-primary-600': {
    backgroundColor: '#DBD5CA',
  },
  'bg-primary-700': {
    backgroundColor: '#928E86',
  },
  'bg-primary-800': {
    backgroundColor: '#6D6B65',
  },
  'bg-primary-900': {
    backgroundColor: '#494743',
  },
  'bg-white-transparent': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  'text-primary-500': {
    color: '#F3EDE0',
  },
  'border-primary-500': {
    borderColor: '#F3EDE0',
  },
  'w-38': {
    width: 185,
  },
  'shadow-sm': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  'shadow-md': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  'shadow-t': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 18,
  },
})
export { tailwind, getColor }
