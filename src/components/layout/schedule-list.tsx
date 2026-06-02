export default function ScheduleList() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <Text size="titleLarge" className="text-gray-100">
            Agende um atendimento
          </Text>

          <Text size="textSmall" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <DataPicker/>
      </div>

      {/* Container */}
      <div>
        {/* Item Manha*/}
        <div>
          <header className="flex items-center gap-4">
            <SunIcon/>
            <Text size="textMedium">
              Agende um atendimento
            </Text>
            
            <Text size="textMedium" className="ml-auto">
              09h-12h
            </Text>
          </header>

          <div className="flex items-center p-5">
            <Text size="textMedium">
              11:00
            </Text>
            
            <Text size="textMedium" className="ml-auto">
              Ryan Donalt
            </Text>

            <button className="">
              <TrashIcon className="text-yellow-500" />
            </button>
          </div>
        </div>
        
      </div>

    </div>
  );
}
