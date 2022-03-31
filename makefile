options:
	@echo "clean | build | deploy | show | git-status"
	@echo
	@echo "main: clean build deploy git-status"

main: clean build deploy

clean:
	rm -rf www/
	./blogit clean

build:
	./blogit build

deploy:
	./blogit deploy

show:
	xdg-open www/index.html

git-status:
	git status


