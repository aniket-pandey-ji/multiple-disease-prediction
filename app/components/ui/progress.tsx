interface ProgressProps {
      value: number;
        max?: number;
        }

        export function Progress({ value, max = 100 }: ProgressProps) {
          return (
              <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                            className="bg-blue-500 h-2 rounded"
                                    style={{ width: `${(value / max) * 100}%` }}
                                          />
                                              </div>
                                                );
                                                }
