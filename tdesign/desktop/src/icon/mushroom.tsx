import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-mushroom')
export default class Mushroom extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#152;&amp;#145;&amp;#232;&amp;#143;&amp;#135;1_mushroom">
          <path
            id="Union"
            d="M12.3076 3.10196C12.9868 4.77944 14.6307 5.99995 16.4991 5.99995C17.6557 5.99995 18.6965 5.59514 19.4835 4.90858C19.4217 4.83955 19.3581 4.77235 19.2928 4.70706C17.667 3.08126 14.9122 2.54865 12.3076 3.10196ZM20.5356 6.63273C19.4203 7.50446 18.0143 7.99995 16.4991 7.99995C13.7096 7.99995 11.3378 6.17352 10.4031 3.72183C9.56056 4.10262 8.80991 4.60418 8.20703 5.20706C7.82579 5.58829 7.65631 5.92693 7.60631 6.24232C7.55603 6.55949 7.60686 6.97776 7.89436 7.55274C7.99066 7.74535 8.23405 8.07227 8.63058 8.50697C9.00958 8.92243 9.4718 9.37585 9.94154 9.81314L9.95463 9.82532L14.1745 14.0452L14.1867 14.0583C14.2583 14.1352 14.3328 14.2141 14.4092 14.294C15.3366 11.822 17.704 9.99995 20.4999 9.99995C20.7013 9.99995 20.9007 10.0091 21.0977 10.0271C21.1345 8.83017 20.9474 7.65487 20.5356 6.63273ZM20.8305 12.0119C20.7214 12.004 20.6112 11.9999 20.4999 11.9999C18.2889 11.9999 16.4113 13.6926 16.0521 15.8502C16.2133 15.9747 16.3338 16.0489 16.4471 16.1055L16.4683 16.1161C17.0342 16.399 17.4467 16.447 17.7604 16.3956C18.0742 16.3442 18.4123 16.1733 18.7928 15.7928C19.772 14.8137 20.4723 13.489 20.8305 12.0119ZM12.069 14.7681L9.23177 11.9309C9.02794 12.1142 8.7884 12.3262 8.52351 12.5545C7.69401 13.2695 6.58705 14.1694 5.54014 14.8415L5.5274 14.8497L5.51442 14.8574C5.48073 14.8777 5.44589 14.8984 5.41008 14.9198C4.85611 15.2502 4.06955 15.7194 3.67956 16.3916C3.50026 16.7007 3.41992 17.0344 3.50747 17.4416C3.60067 17.8753 3.90676 18.4926 4.70702 19.2928C5.50729 20.0931 6.12461 20.3992 6.55824 20.4924C6.9655 20.5799 7.29916 20.4996 7.60823 20.3203C8.28047 19.9303 8.74965 19.1437 9.08008 18.5898C9.10144 18.554 9.12222 18.5191 9.14243 18.4854L9.15022 18.4725L9.1584 18.4597C9.83046 17.4128 10.7303 16.3059 11.4453 15.4764C11.6736 15.2115 11.8857 14.9719 12.069 14.7681ZM7.79998 10.5285C7.57391 10.303 7.3551 10.0764 7.15301 9.85484C6.74062 9.40277 6.33392 8.904 6.1055 8.44717C5.68589 7.60794 5.49857 6.76436 5.63098 5.92916C5.76367 5.09217 6.19774 4.38792 6.79282 3.79284C7.87891 2.70675 9.27337 1.92192 10.7614 1.44566C14.0839 0.382269 18.1927 0.778496 20.707 3.29284C21.0554 3.64117 21.3625 4.02223 21.6303 4.42762C22.938 6.40754 23.3189 8.97929 22.9904 11.3445C22.6834 13.5553 21.7463 15.6678 20.207 17.2071C19.6161 17.798 18.916 18.233 18.0838 18.3693C17.2516 18.5057 16.4104 18.3232 15.5738 17.9049L15.5527 17.8944C15.1336 17.6848 14.7717 17.4087 14.3323 17.0146C14.0694 16.7788 13.7701 16.4927 13.4738 16.1972C13.3187 16.3707 13.145 16.5678 12.9602 16.7821C12.268 17.5852 11.445 18.6025 10.8499 19.527C10.8321 19.5569 10.8118 19.5917 10.7889 19.6308C10.4914 20.1402 9.76707 21.3801 8.61184 22.0503C7.93475 22.4431 7.09724 22.6539 6.13792 22.4477C5.20497 22.2472 4.26031 21.6745 3.29281 20.707C2.32531 19.7395 1.75267 18.7949 1.55213 17.8619C1.34592 16.9026 1.5568 16.0651 1.9496 15.388C2.61979 14.2328 3.85966 13.5085 4.36906 13.2109C4.40815 13.1881 4.44295 13.1678 4.47285 13.15C5.39733 12.5549 6.41464 11.7319 7.21773 11.0396C7.43098 10.8558 7.6271 10.683 7.79998 10.5285Z"
          />
        </g>
      </svg>
    )
  }
}