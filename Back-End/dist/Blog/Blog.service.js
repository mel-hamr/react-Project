"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BlogService = class BlogService {
    constructor(BlogModel) {
        this.BlogModel = BlogModel;
        this.id = -1;
    }
    async insertBlog(title, body, author) {
        var lastBlog = await this.BlogModel.find()
            .sort({ _id: -1 })
            .limit(1);
        if (this.id === -1 && !lastBlog.length) {
            this.id = 0;
        }
        else
            this.id = Number(lastBlog[0].id) + 1;
        console.log(lastBlog);
        console.log(this.id);
        const newBlog = new this.BlogModel({ _id: this.id, title, body, author });
        var blog = await newBlog.save().catch((e) => {
            console.log('error :', e);
            return 'faild';
        });
        this.id++;
        return 'succes';
    }
    async getAllBlog() {
        let blogs = await this.BlogModel.find();
        return blogs;
    }
    async getBlogById(id) {
        let blog = await this.BlogModel.findOne().where({ _id: id.toString() });
        return blog;
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Blog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=Blog.service.js.map