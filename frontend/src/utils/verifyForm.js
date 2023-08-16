export const isEmpty = (form) => {
      let empty = false
      let nameInput
      for (const [name, value] of form.entries()) {
            if (value.trim() === '') {
                  empty = true
                  nameInput = name
                  break
            }
      }
      return {empty, nameInput}
}