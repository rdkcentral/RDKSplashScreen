export default class LoginButton extends lng.Component{
	static _template(){
		return {
			w: 1025, h: 70, rect: true, color: 0xFF0E2B3D,
			Label: { x: 512, y: 35, mountX: 0.5, mountY: 0.4, color: 0xFFF1F1F1, text: { text: 'LOGIN', fontSize: 32 } }
		};
	}

	_focus(){
		this.patch({ color: 0xFF377FAC });
	}

	_unfocus(){
		this.patch({ color: 0xFF0E2B3D });
	}
}