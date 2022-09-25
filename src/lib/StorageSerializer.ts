type SerializableType = Date | string | number | boolean | bigint
type SerializableObject = Record<string, SerializableType>

type SerializedValue = {
  value: string
  type: "date" | "string" | "number" | "boolean" | "bigint"
}

export class StorageSerializer {
  public static serializeValue = (value: SerializableType): string | null => {
    const type = typeof value
    const isDate = value instanceof Date

    if (
      type === "symbol" ||
      (type === "object" && !isDate) ||
      type === "function" ||
      type === "undefined"
    ) {
      console.warn(
        `Invalid attempt to serialized "${value}" of type ${type}. Serializing ${type} type is not supported.`
      )

      return null
    }

    const serialized: SerializedValue = {
      value: JSON.stringify(value),
      // @ts-ignore
      type: isDate ? "date" : type,
    }

    return JSON.stringify(serialized)
  }

  public static deserializeValue = (value: string): SerializableType => {
    const deserialized: SerializedValue = JSON.parse(value)

    if (deserialized.type === "date") {
      const parsedDate = JSON.parse(deserialized.value)
      return new Date(parsedDate)
    } else {
      return JSON.parse(deserialized.value)
    }
  }

  public static serialize = <T extends SerializableObject>(item: T): string => {
    const values = Object.keys(item).reduce((object, key) => {
      const value = StorageSerializer.serializeValue(item[key])
      if (value !== null) {
        object[key] = value
      }
      return object
    }, {} as Record<string, string>)

    return JSON.stringify(values)
  }

  public static deserialize = <T extends SerializableObject>(
    item: string
  ): T => {
    const value: Record<string, string> = JSON.parse(item)

    return Object.keys(value).reduce((object, key) => {
      object[key] = StorageSerializer.deserializeValue(value[key])
      return object
    }, {} as SerializableObject) as T
  }
}
