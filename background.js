browser.menus.create({
	id: "reload-semaphore",
	title: "Reload Semaphore",
	documentUrlPatterns: [
		"https://semaphore.social/*"
	]
});

function reloadSidebar() {
	browser.sidebarAction.setPanel({
		panel: "https://semaphore.social"
	});
}

browser.menus.onClicked.addListener((info, tab) {
	if (info.menuItemId == "reload-semaphore") {
		browser.sidebarAction.getPanel({}).then(reloadSidebar)
	}
});

browser.commands.onCommand.addListener(command => {
	if (command == "toggle-sidebar") {
		browser.sidebarAction.isOpen({}).then(isOpen => {
			if (isOpen) {
				browser.sidebarAction.close()
			} else {
				browser.sidebarAction.open();
			}
		});
	}
});