import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-blockchain')
export default class Blockchain extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '24px',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2H9V4.5H15V2H22V9H19.5V15H22V22H15V19.5H9V22H2V15H4.5V9H2V2ZM7 7V4H4V7H7ZM6.5 9V15H9V17.5H15V15H17.5V9H15V6.5H9V9H6.5ZM17 17V20H20V17H17ZM7 17H4V20H7V17ZM17 4V7H20V4H17Z" />
      </svg>
    )
  }
}
