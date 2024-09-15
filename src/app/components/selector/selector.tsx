import './selector.scss';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { GpsFixedOutlined, NearMeOutlined } from '@mui/icons-material';
import { GeoDataFormTypes } from '@/app/shared/library/common/dictionaries';

let value = `Value`;

export class SelectorOption {
    value: any = value;
    icon?: any = <GpsFixedOutlined />;
    label?: string | number = this.value; 
    className?: string = `selectorOption`;
    constructor(dataOrLabel: string | number);
    constructor(dataOrLabel: Partial<SelectorOption>);
    constructor(dataOrLabel: Partial<SelectorOption> | string | number) {
      if (typeof dataOrLabel === `string` || typeof dataOrLabel === `number`) {
        this.label = dataOrLabel;
        this.value = dataOrLabel;
      } else if (typeof dataOrLabel === `object`) {
        Object.assign(this, dataOrLabel);
        if (this.value === undefined || this.value === null) {
          this.value = this.label;
        }
      }
    }
}

export default function Selector({
    value, 
    onChange, 
    className,
    size = `small`, 
    options = Object.values(GeoDataFormTypes).map(value => new SelectorOption({value, 
        ...(value == GeoDataFormTypes.Locations && {
            icon: <NearMeOutlined />,
        })}
    )) as SelectorOption[],
}: any) {
    return <>
        <ToggleButtonGroup size={size} value={value} onChange={onChange} className={`${className} geoDataFormTypesToggle`}>
            {options.length > 0 ? options.map((option: SelectorOption, idx?: any) => (
                <ToggleButton 
                    key={idx} 
                    value={option.value} 
                    className={`${option.className} geoDataFormTypesToggleBtn noBorder ${idx == 0 ? `first` : idx == options.length - 1 ? `last` : `middle`}`}
                >
                    <div className={`optionIcon pointerEventsNone`}>{option.icon}</div>
                    <div className={`optionLabel pointerEventsNone`} style={{ paddingLeft: 5, fontSize: 15 }}>
                        {(typeof option.value == `string` || typeof option.value == `number`) ? (
                            option.value
                        ) : (
                            option.label
                        )}
                    </div>
                </ToggleButton>
            )) : (
                `No Options`
            )}
        </ToggleButtonGroup>
    </>
}