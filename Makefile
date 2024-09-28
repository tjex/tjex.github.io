# tjex.net

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css

deploy: css
	yarn build
	git add dist src/styles
	git commit -m "local build"
	git push origin deploy

