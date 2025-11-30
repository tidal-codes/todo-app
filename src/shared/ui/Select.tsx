import {
  Portal,
  Select as SelectBase,
  createListCollection,
} from "@chakra-ui/react";

interface SelectItem {
  label: string;
  value: string;
}

interface SelectProps {
  items: SelectItem[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: string;
}

const Select = ({
  items,
  value,
  onChange,
  placeholder = "Select...",
  label,
}: SelectProps) => {
  const collection = createListCollection({ items });

  return (
    <SelectBase.Root
      collection={collection}
      value={value}
      onValueChange={(e) => onChange(e.value)}
    >
      <SelectBase.HiddenSelect />
      {label && <SelectBase.Label>{label}</SelectBase.Label>}
      <SelectBase.Control dir="rtl">
        <SelectBase.Trigger>
          <SelectBase.ValueText placeholder={placeholder} />
        </SelectBase.Trigger>
        <SelectBase.IndicatorGroup>
          <SelectBase.Indicator />
        </SelectBase.IndicatorGroup>
      </SelectBase.Control>
      <Portal>
        <SelectBase.Positioner>
          <SelectBase.Content>
            {collection.items.map((item) => (
              <SelectBase.Item item={item} key={item.value} dir="rtl">
                {item.label}
                <SelectBase.ItemIndicator />
              </SelectBase.Item>
            ))}
          </SelectBase.Content>
        </SelectBase.Positioner>
      </Portal>
    </SelectBase.Root>
  );
};

export default Select;
