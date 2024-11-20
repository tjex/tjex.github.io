# tjex.net

clean:
	rm -rf dist
	rm site.tar.gz

css:
	sass scss/main.scss src/styles/global.css

build:
	make css
	yarn run build

deploy: 
	make build
	tar -C dist -cvz . > site.tar.gz
	hut pages publish -d tjex.net site.tar.gz
	rm site.tar.gz

gh-deploy:
	rm -rf dist/
	git checkout deploy
	git merge --no-edit main
	make css
	yarn run build
	git add -f dist
	git commit -m "build and deploy"
	git push origin deploy
	git checkout main
