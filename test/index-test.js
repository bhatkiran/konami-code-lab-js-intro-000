describe('index', () => {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


  function triggerKeyDown(which) {
    const keyboardEvent = document.createEvent("KeyboardEvent")
    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.keyCode = which;

        document.body.dispatchEvent(event)
  }

  describe('Konami code', () => {
    it('triggers an alert if the right code is entered', () => {
      init()

      window.alert = expect.createSpy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(code[i])
      }

      expect(window.alert).toHaveBeenCalled()
    })

    it('does not trigger an alert if the wrong code is entered', () => {
      init()
      alert("Start");
      window.alert = expect.createSpy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(i)
      }

      expect(window.alert).toNotHaveBeenCalled()
    })
  })
})
