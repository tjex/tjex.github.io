# tjex.net

deploy: 
	yarn build
	git add dist
	git commit -m "local build"
	git push

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css
